import styles from "./Search.module.css";
// hooks
import { Link } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// components
import PostDetail from "../../components/PostsDetail.js";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocument("posts", search);

  return (
    <div className={styles.searchContainer}>
      <h2>Search</h2>
      <div>
          {posts && posts.length === 0 && (
            <div className={styles.noPosts}>
              <p>Não forem encontrados posts a partir da sua busca...</p>
              <Link to="/" className="btn btn-dark">
                Voltar
              </Link>
            </div>
          )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
