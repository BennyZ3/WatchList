import ContentRow from "./ContentRow";

const ContentTable = ({ contents }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date Added</th>
          <th>Status</th>
          <th>Current Episode</th>
          <th>Total Episodes</th>
          <th>Platform</th>
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

export default ContentTable;
