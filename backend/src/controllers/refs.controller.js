import { query } from "../shared/db.js";
import {
  successResponse,
  notFound,
  serverError,
} from "../shared/response-helpers.js";

export const getAllAromas = async (req, res) => {
  const sql = `
		SELECT 
			f.default_name AS family,
			sf.default_name AS subfamily,
			a.default_name AS aroma
		FROM refs.aroma a
		JOIN refs.aroma_subfamily sf ON a.aroma_subfamily_id = sf.id
		JOIN refs.aroma_family f ON sf.aroma_family_id = f.id
		ORDER BY f.default_name, sf.default_name, a.default_name
			`;
  try {
    const { rows } = await query(sql);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    return rows;
  } catch (err) {
    serverError(res, err, "Error getting aromas");
  }
};

async function structureCriteria(data) {
  const structuredData = [];
  const criteriaMap = new Map();
  const aromas = await getAllAromas();

  const groupedAromas = aromas.reduce((group, aroma) => {
    if (!group[aroma.family]) {
      group[aroma.family] = {};
    }
    if (!group[aroma.family][aroma.subfamily]) {
      group[aroma.family][aroma.subfamily] = [];
    }
    group[aroma.family][aroma.subfamily].push(aroma.aroma);
    return group;
  }, {});

  data.forEach((item) => {
    const {
      category,
      criterion,
      input_type,
      default_label,
      default_description,
    } = item;

    if (!criteriaMap.has(criterion)) {
      const newCriterion = {
        criterion,
        default_description,
        category,
        opts: [],
        input_type,
      };
      structuredData.push(newCriterion);
      criteriaMap.set(criterion, newCriterion);
    }

    const criterionObj = criteriaMap.get(criterion);

    if (!criterionObj.category.includes(category)) {
      criterionObj.category.push(category);
    }

    if (!criterionObj.default_description.includes(default_description)) {
      criterionObj.default_description.push(default_description);
    }

    if (!criterionObj.input_type.includes(input_type)) {
      criterionObj.input_type.push(input_type);
    }

    if (default_label != null && !criterionObj.opts.includes(default_label)) {
      criterionObj.opts.push(default_label);
    }

    if (input_type === "aroma_selector") {
      criterionObj.opts.push(groupedAromas);
    }
  });
  return structuredData;
}

export const getCriteria = async (req, res) => {
  const sql = `
			SELECT
			  cat.default_name AS category,
			  c.default_name AS criterion,
			  i.name AS input_type,
			  v.value,
			  v.default_label,
				c.default_description
			FROM refs.criterion c
			JOIN refs.input_type i ON c.input_type_id = i.id
			JOIN refs.category cat ON c.category_id = cat.id
			LEFT JOIN refs.criterion_value v ON c.id = v.criterion_id
			ORDER BY cat.position, c.position, v.value
			`;
  try {
    const { rows } = await query(sql);
    if (!rows || rows.length === 0) {
      return notFound(rows);
    }
    const structuredRows = await structureCriteria(rows);
    return successResponse(
      res,
      structuredRows,
      "Criteria successfully fetched",
    );
  } catch (err) {
    serverError(res, err, "Error getting criteria");
  }
};
