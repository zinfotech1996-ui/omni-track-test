#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

user_problem_statement: |
  Add multi-language feature with globe icon to select language (English, Spanish, French).
  Add notification bell for Employees and Admin:
  - Admins receive notifications when employees submit timesheets
  - Employees receive notifications when admin approves or denies their timesheets

backend:
  - task: "Multi-language support - Translation infrastructure"
    implemented: true
    working: "NA"
    file: "frontend/src/i18n/"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Created i18n configuration with translations for English, Spanish, and French. Installed i18next, react-i18next, and i18next-browser-languagedetector."
  
  - task: "Notification system backend - Models and endpoints"
    implemented: true
    working: "NA"
    file: "backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Added Notification model, NotificationType enum, and create_notification helper function. Created 4 notification endpoints: GET /api/notifications, GET /api/notifications/unread-count, PUT /api/notifications/{id}/read, PUT /api/notifications/mark-all-read"
  
  - task: "Timesheet submission notifications"
    implemented: true
    working: "NA"
    file: "backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Modified submit_timesheet endpoint to create notifications for all admins when an employee submits a timesheet."
  
  - task: "Timesheet review notifications"
    implemented: true
    working: "NA"
    file: "backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Modified review_timesheet endpoint to create notifications for employees when their timesheet is approved or denied."

frontend:
  - task: "Language selector UI with globe icon"
    implemented: true
    working: "NA"
    file: "frontend/src/components/DashboardLayout.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Added globe icon with dropdown menu in DashboardLayout sidebar. Users can select between English, Spanish, and French. Navigation and key UI elements now use translation keys."
  
  - task: "NotificationContext for polling"
    implemented: true
    working: "NA"
    file: "frontend/src/contexts/NotificationContext.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Created NotificationContext with 30-second polling mechanism. Provides notifications list, unread count, markAsRead, and markAllAsRead functions."
  
  - task: "Notification bell UI with badge"
    implemented: true
    working: "NA"
    file: "frontend/src/components/NotificationDropdown.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Created NotificationDropdown component with bell icon and unread count badge. Shows list of notifications with mark as read functionality."

metadata:
  created_by: "main_agent"
  version: "1.0"
  test_sequence: 0
  run_ui: false

test_plan:
  current_focus:
    - "Notification system backend - Models and endpoints"
    - "Timesheet submission notifications"
    - "Timesheet review notifications"
    - "Language selector UI with globe icon"
    - "NotificationContext for polling"
    - "Notification bell UI with badge"
  stuck_tasks: []
  test_all: true
  test_priority: "high_first"

agent_communication:
  - agent: "main"
    message: |
      Implementation Complete:
      
      MULTI-LANGUAGE FEATURE:
      - Installed i18next, react-i18next, i18next-browser-languagedetector
      - Created translation files for English, Spanish, French
      - Added globe icon in DashboardLayout sidebar for language selection
      - Translated navigation, app title, and key UI elements
      
      NOTIFICATION SYSTEM:
      Backend:
      - Added Notification model with fields: id, user_id, type, title, message, read, related_timesheet_id, created_at
      - Added NotificationType enum: TIMESHEET_SUBMITTED, TIMESHEET_APPROVED, TIMESHEET_DENIED
      - Created helper function create_notification()
      - Added 4 API endpoints:
        * GET /api/notifications - fetch user's notifications
        * GET /api/notifications/unread-count - get unread count
        * PUT /api/notifications/{id}/read - mark single notification as read
        * PUT /api/notifications/mark-all-read - mark all as read
      - Modified submit_timesheet to notify all admins
      - Modified review_timesheet to notify employee
      
      Frontend:
      - Created NotificationContext with 30-second polling
      - Created NotificationDropdown component with bell icon
      - Shows unread count badge (9+ for 10 or more)
      - Integrated with App.js via NotificationProvider
      - Added to DashboardLayout sidebar
      
      TESTING NEEDED:
      1. Test language switching between English, Spanish, French
      2. Test employee submitting timesheet creates notification for admin
      3. Test admin approving timesheet creates notification for employee
      4. Test admin denying timesheet creates notification for employee
      5. Test notification bell shows correct unread count
      6. Test marking single notification as read
      7. Test marking all notifications as read
      8. Test notification polling (wait 30+ seconds after action)
      
      Backend is running on port 8001. Frontend compiled successfully.