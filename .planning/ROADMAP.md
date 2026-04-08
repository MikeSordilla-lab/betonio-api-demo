# Roadmap: Exploring APIs Using Fake Data

**Created:** 2026-04-08
**Granularity:** Standard
**Coverage:** 12/12 v1 requirements mapped

## Phases

- [ ] **Phase 1: Data Shape & Row Integrity** - Define and normalize table row data so personal and API records share one consistent structure.
- [ ] **Phase 2: API Fetch Lifecycle** - Integrate JSONPlaceholder fetching with reliable loading, error, and refresh behavior.
- [ ] **Phase 3: Unified Table Experience** - Deliver the final user-facing table with required columns and search/filter behavior.
- [ ] **Phase 4: Submission Delivery** - Publish the project and complete assignment submission workflow.

## Phase Details

### Phase 1: Data Shape & Row Integrity
**Goal**: Users see consistent row formatting where personal and API-originated rows can be rendered safely in the same table model.
**Depends on**: Nothing (first phase)
**Requirements**: DATA-03, DATA-04, UX-01, UX-04
**Success Criteria** (what must be TRUE):
  1. User sees personal information prepared as a valid table row that can be rendered with the same fields as API rows.
  2. User sees API names split into First Name and Last Name values in the table data model.
  3. User can identify whether a row came from Personal data or API data.
  4. User sees a clear indicator when required row data is missing.
**Plans**: TBD
**UI hint**: yes

### Phase 2: API Fetch Lifecycle
**Goal**: Users can reliably request and refresh remote user data with clear request-state feedback.
**Depends on**: Phase 1
**Requirements**: DATA-01, DATA-05, DATA-06, UX-02
**Success Criteria** (what must be TRUE):
  1. User can trigger loading of users from https://jsonplaceholder.typicode.com/users and receive response data in the app.
  2. User sees a loading state while a request is in progress.
  3. User sees an error state when the API request fails.
  4. User can manually refresh data and observe the app re-requesting users.
**Plans**: TBD
**UI hint**: yes

### Phase 3: Unified Table Experience
**Goal**: Users can view and explore one merged table containing personal and API rows with assignment-required columns.
**Depends on**: Phase 2
**Requirements**: DATA-02, UX-03
**Success Criteria** (what must be TRUE):
  1. User can view a single table with columns: ID, First Name, Last Name, Username, Email, Zipcode.
  2. User sees personal row rendered first, followed by API rows.
  3. User can search/filter rows by username or email and see matching results update.
**Plans**: TBD
**UI hint**: yes

### Phase 4: Submission Delivery
**Goal**: Student can deliver the completed assignment artifact in the required GitHub + Word-document workflow.
**Depends on**: Phase 3
**Requirements**: DLV-01, DLV-02
**Success Criteria** (what must be TRUE):
  1. Student can access a public GitHub repository containing the completed project.
  2. Student can retrieve the repository URL and place it into the required Word document submission flow.
**Plans**: TBD

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Data Shape & Row Integrity | 0/0 | Not started | - |
| 2. API Fetch Lifecycle | 0/0 | Not started | - |
| 3. Unified Table Experience | 0/0 | Not started | - |
| 4. Submission Delivery | 0/0 | Not started | - |
