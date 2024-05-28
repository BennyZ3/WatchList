const ContentRow = ({ content }) => {
  const {
    id,
    title,
    dateAdded,
    status,
    currentEpisode,
    totalEpisodes,
    platform,
  } = content;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{dateAdded}</td>
      <td>{status}</td>
      <td>{currentEpisode}</td>
      <td>{totalEpisodes}</td>
      <td>{platform}</td>
    </tr>
  );
};

ContentRow.propTypes = {
  content: {
    id: Number,
    title: String,
    dateAdded: String,
    status: String,
    currentEpisode: Number,
    totalEpisodes: Number,
    platform: String,
  },
};

export default ContentRow;
