import { useEffect, useState } from "react";
import { fetchAllCategories } from "../Utils/apis";
import { useParams , Link} from "react-router-dom"
import AllItems from "./AllItems";


export default function AllCategories() {
  const [loading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { category_name } = useParams ();

  useEffect(() => {
    fetchAllCategories().then((body) => {
      setCategories(body.categories);
      setIsLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <h3>Shop By Categories</h3>
    <ul>
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/items/${category.category_name}`}>{category.category_name}</Link>

          </li>
        );
      })}
    </ul>
    </>
  );
}
