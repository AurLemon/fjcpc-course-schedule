// utils/config.js

const collegeAppBaseUrl = process.env.FJCPC_APP_BASE_URL || "https://app.fjcpc.edu.cn"
const testStudentUcode = process.env.TEST_STUDENT_UCODE || null

module.exports = {
  collegeAppBaseUrl,
  testStudentUcode
}