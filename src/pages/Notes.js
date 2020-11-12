import React, {useState ,useEffect} from 'react';



function Notes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
      <div>
    <div className="Notes">
    <p>here i will share my hobbies, interestes and goals for the future</p>
    <div className="football">fetch an Api or just images</div>
    <div className="economy">fetch an Api or just images</div>
    <div className="miniatures">fetch an Api or just images</div>
    </div>
  </div>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}


   
export default Notes;



 