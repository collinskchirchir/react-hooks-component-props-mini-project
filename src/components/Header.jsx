import blogData from "../data/blog"
const Header = () => {
  return(
    <header>
      <h1>{blogData.name}</h1>
    </header>
  )
}
export default Header