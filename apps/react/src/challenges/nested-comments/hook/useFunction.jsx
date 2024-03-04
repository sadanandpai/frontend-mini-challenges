const useFunction = () => {
  const addCommentsToTree = (tree, commentId, newComment) => {
    if (tree.id === commentId) {
      tree.replies.unshift(newComment);
      return tree;
    }
    const updatedReplies = tree.replies.map((ele) => addCommentsToTree(ele, commentId, newComment));

    return { ...tree, replies: updatedReplies };
  };

  const deleteCommentFromTree = (tree, commentId) => {
    if (tree.id === commentId) {
      return [];
    }
    // If tree.replies is undefined, return an empty array
    const updatedReplies = tree.replies?.map((ele) => deleteCommentFromTree(ele, commentId)) || [];

    return { ...tree, replies: updatedReplies };
  };
  return { addCommentsToTree, deleteCommentFromTree };
};

export default useFunction;
