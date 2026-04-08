import { UsersTable } from './features/users-table/components/UsersTable.jsx'
import { mergeRows } from './features/users-table/model/mergeRows.js'
import {
  createPersonalRow,
  normalizeApiUser,
} from './features/users-table/model/rowModel.js'
import './App.css'

function App() {
  const personalRow = createPersonalRow({
    id: 'ME',
    firstName: 'Mike',
    lastName: 'Student',
    username: 'mike-learning-api',
    email: 'mike.student@example.com',
    zipcode: '',
  })

  const apiFixtureRows = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: { zipcode: '92998-3874' },
    },
    {
      id: 2,
      name: 'Plato',
      username: 'Antonette',
      email: '',
      address: {},
    },
  ].map(normalizeApiUser)

  const tableRows = mergeRows(personalRow, apiFixtureRows)

  return (
    <main className="page-shell">
      <header className="page-header">
        <h1>Exploring APIs Using Fake Data</h1>
        <p>
          Phase 1 baseline: personal row first, API names split, row source visible,
          and missing key fields labeled.
        </p>
      </header>
      <UsersTable rows={tableRows} />
    </main>
  )
}

export default App
