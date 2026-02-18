//functions
const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
};

const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
};