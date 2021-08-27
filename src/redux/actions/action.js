const findCurrentItem = (id) => {
  return {
    type: "findCurrentItem",
    payload: id,
  };
};

export default findCurrentItem;
