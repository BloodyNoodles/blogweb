import Sidebar from "./Sidebar";
import "./App.css";

function Posts() {
  const data = [
    {
      Name: "Jones Hilario",
      Title: "Totoo ang chismis!?",
      Content: "Maris x Anthony (sino ba yan!?)",
      Date: "06/06/2004",
      Flagged: false,
      Like: 427,
    },
    {
      Name: "Catriona White",
      Title: "Thoughts kay Chelsea",
      Content: "Oks naman s'ya, luto nga laban e wews tsk tsk tsk",
      Date: "07/03/2004",
      Flagged: true,
      Like: 427,
    },
  ];
  return (
    <div className="dashboardbg">
      <div className="navBar">
        <label className="navbartext">Posts</label>
      </div>
      <div className="dashboardcontent">
        <div className="poststablecontainer">
          <div className="filters">
            <div className="filter1">
              <label className="filterlabel">Email</label>
              <input
                className="userSearch"
                placeholder="e.g. johndoe@gmail.com"
              />
            </div>
            <div className="filter1">
              <label className="filterlabel">Date Start</label>
              <input className="dateSearch" type="date" />
            </div>
            <div className="filter1">
              <label className="filterlabel">Date End</label>
              <input className="dateSearch" type="date" />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Content</th>
                <th>Date Posted</th>
                <th>Flagged</th>
                <th>Like Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.name}>
                  <td>{item.Name}</td>
                  <td>{item.Title}</td>
                  <td>{item.Content}</td>
                  <td>{item.Date}</td>
                  <td>{item.Flagged ? "Yes" : "No"}</td>
                  <td>{item.Like}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Posts;
