import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from "@apollo/client";

function App() {
  const GET_COUNTRIES = gql`
    query GetJobs {
      countries {
        code
        name
        continent{name}
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error...</p>;
  else {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Continent</th>
            </tr>
            {data.countries.map((country, index) =>
              <tr key={index}>
                <td>{country.code}</td>
                <td>{country.name}</td>
                <td>{country.continent.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
