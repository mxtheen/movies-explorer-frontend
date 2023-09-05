import { useNavigate } from "react-router-dom"
function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__heading">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button className="not-found__button" onClick={goBack}>Назад</button>
    </section>
  )
}
export default PageNotFound
