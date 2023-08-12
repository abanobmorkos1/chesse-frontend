import { Link , useLoaderData ,Form } from "react-router-dom"

function Index(props) {
    const cheese = useLoaderData()

     
  return (
    <div>
      <h2>Create a cheese</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="cheeze's name" />
        <input type="input" name="image" placeholder="cheeze's picture" />
        <input type="submit" value="create cheeze" />
      </Form>

      <h2>cheese</h2>
      {cheese.map((cheeze, index) => {
        return (
          <div key={cheeze._id} className="cheeze">
            <Link to={`/${cheeze._id}`}>
              <h1>{cheeze.name}</h1>
            </Link>
            <img src={cheeze.image} alt={cheeze.name} />
            <h3>{cheeze.name}</h3>
          </div>
        );
      })}
    </div>
  )
}

  export default Index
  