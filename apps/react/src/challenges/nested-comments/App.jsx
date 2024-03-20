import { useState } from 'react';
import { CommentsData } from './data/data';
import Comments from './Comments';
import useFunction from './hook/useFunction';

// import './styles.css';

const App = () => {
  const [commentsData, setCommentsData] = useState(CommentsData);
  const { addCommentsToTree, deleteCommentFromTree } = useFunction();

  const addComments = (commentId, comment) => {
    let updatedTree = addCommentsToTree(commentsData, commentId, comment);
    setCommentsData(updatedTree);
  };
  const deleteComment = (commentId) => {
    let updatedTree = deleteCommentFromTree(commentsData, commentId);
    setCommentsData(updatedTree);
  };
  return (
    <>
      <h1>Comments</h1>
      <Comments comments={commentsData} addComments={addComments} deleteComment={deleteComment} />
    </>
  );
};

export default App;
