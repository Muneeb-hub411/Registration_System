const UserCard = ({ imageUrl, name, email, department, onApprove }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{email}</p>
        <p className="text-gray-600">{department}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={onApprove}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default UserCard;
