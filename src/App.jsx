import { UsersTable } from './features/users-table/components/UsersTable.jsx'
import { useUsersTableData } from './features/users-table/hooks/useUsersTableData.js'
import './App.css'

function App() {
  const { rows, isLoading, errorMessage, refreshData } = useUsersTableData()

  return (
    <main className="page-shell">
      <header className="page-header">
        <h1>Exploring APIs Using Fake Data</h1>
        <p>
          Phase 2 lifecycle: live API fetch, loading/error feedback, manual refresh.
        </p>
        <div className="controls-row">
          <button type="button" className="refresh-button" onClick={refreshData}>
            Refresh API Data
          </button>
          {isLoading ? <span className="status-pill status-loading">Loading users...</span> : null}
        </div>
        {errorMessage ? (
          <p role="alert" className="status-pill status-error">
            {errorMessage}
          </p>
        ) : null}
      </header>
      <UsersTable rows={rows} />
    </main>
  )
}

export default App
