//functions
const formatDate = (timestamp) => {
  if(!timestamp) return "";
  return new Date(timestamp).toLocaleString()
};