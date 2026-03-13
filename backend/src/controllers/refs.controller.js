import { executeQuery } from "../shared/db.js";

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
  await executeQuery(req, res, sql, { label: "aroma" });
};

export const getCriteria = async (req, res) => {
  const sql = `
			SELECT
			  cat.default_name AS category,
			  c.default_name AS criterion,
			  i.name AS input_type,
			  v.value,
			  v.default_label,
				c.default_description
			FROM refs.criterion_value v
			JOIN refs.criterion c ON v.criterion_id = c.id
			JOIN refs.input_type i ON c.input_type_id = i.id
			JOIN refs.category cat ON c.category_id = cat.id
			ORDER BY cat.default_name, c.default_name, v.value
			`;
  await executeQuery(req, res, sql, { label: "criteria" });
};
