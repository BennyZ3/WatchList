import { useState } from "react";
import ContentRow from "./ContentRow";

const ContentTable = ({ contents }) => {
  const [sortKey, setSortKey] = useState("id");
  const [sortAsc, setSortAsc] = useState(true);
  const handleOnClickSort = (e) => {
    if (sortKey === e.target.id) {
      setSortAsc(!sortAsc);
    } else {
      setSortAsc(true);
    }
    contents.sort((a, b) => {
      if (!sortAsc) {
        // swap a and b for opposite order
        const temp = a;
        a = b;
        b = temp;
      }
      if (a[e.target.id] < b[e.target.id]) {
        return -1;
      }
      if (a[e.target.id] > b[e.target.id]) {
        return 1;
      }
      return 0;
    });
    setSortKey(e.target.id);
  };
  // TODO: add search
  // TODO: add filter
  // TODO: add pagination
  return (
    <table>
      <thead>
        <tr>
          <th onClick={handleOnClickSort} id="id">
            ID
          </th>
          <th onClick={handleOnClickSort} id="title">
            Title
          </th>
          <th onClick={handleOnClickSort} id="dateAdded">
            Date Added
          </th>
          <th onClick={handleOnClickSort} id="status">
            Status
          </th>
          <th onClick={handleOnClickSort} id="currentEpisode">
            Current Episode
          </th>
          <th onClick={handleOnClickSort} id="totalEpisodes">
            Total Episodes
          </th>
          <th onClick={handleOnClickSort} id="platform">
            Platform
          </th>
        </tr>
      </thead>
      <tbody>
        {contents.map((content) => (
          <ContentRow key={content.id} content={content} />
        ))}
      </tbody>
    </table>
  );
};
ContentTable.propTypes = {
  contents: [
    {
      id: Number,
      title: String,
      dateAdded: String,
      status: String,
      currentEpisode: Number,
      totalEpisodes: Number,
      platform: String,
    },
  ],
};

export default ContentTable;
