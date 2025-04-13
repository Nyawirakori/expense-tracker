export default function Search({ setSearchTerm }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Search expenses"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
