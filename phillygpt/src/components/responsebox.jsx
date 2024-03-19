import React from 'react';

const ResponseBox = () => {
  return (
    <div className="response-container w-1/2 h-full bg-gray-navbar rounded-lg border border-gray-400 p-4 text-white">
      <div className="response-section mb-4">
        <h2 className="text-xl mb-2">Response</h2>
        <div className="text-display bg-darkgray p-2 rounded-lg">
          <p>Text for the response should be put here.</p> {/*THIS WILL NEED TO BE REPLACED AFTER CONNECTING BACKEND*/}
        </div>
      </div>
      <hr className="border-white my-4" />
      <div className="sql-query-section mb-4">
        <h2 className="text-xl mb-2">SQL Query</h2>
        <div className="text-display bg-darkgray p-2 rounded-lg">
          <p>Text for SQL Query should be put here.</p> {/*THIS WILL NEED TO BE REPLACED AFTER CONNECTING BACKEND*/}
        </div>
      </div>
      <hr className="border-white my-4" />
      <div className="tables-accessed-section">
        <h2 className="text-xl mb-2">Tables Accessed</h2>
        <div className="text-display bg-darkgray p-2 rounded-lg">
          <p>Text for Tables Accessed should be put here.</p> {/*THIS WILL NEED TO BE REPLACED AFTER CONNECTING BACKEND*/}
        </div>
      </div>
    </div>
  );
}

export default ResponseBox;
