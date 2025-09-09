const Log = require("./log");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjM0MWE0NTI4QGdtcml0LmVkdS5pbiIsImV4cCI6MTc1NzM5OTE5NywiaWF0IjoxNzU3Mzk4Mjk3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZGM1ZWZiZGQtOWJhZi00NmJiLTgzYmYtMzAyMmI1YTliZGE2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibG9waW50aSBzcmF2YW50aGkiLCJzdWIiOiI0MTM4Y2VhMS04OTY2LTRhZDgtOGQwZC05NTdmMTM0N2MzNzEifSwiZW1haWwiOiIyMjM0MWE0NTI4QGdtcml0LmVkdS5pbiIsIm5hbWUiOiJsb3BpbnRpIHNyYXZhbnRoaSIsInJvbGxObyI6IjIyMzQxYTQ1MjgiLCJhY2Nlc3NDb2RlIjoiZWV0aE5lIiwiY2xpZW50SUQiOiI0MTM4Y2VhMS04OTY2LTRhZDgtOGQwZC05NTdmMTM0N2MzNzEiLCJjbGllbnRTZWNyZXQiOiJYV3JtZkNmeFJ2ak5heXRIIn0.YVGZEky1ljB3-oEAX3XlPJFl1xYS5lwXT6B44kLXNXE";

async function run() {
  await Log("frontend", "info", "component", "Component mounted successfully", token);
  await Log("frontend", "error", "state", "State update failed due to invalid data", token);
  await Log("frontend", "debug", "hook", "useEffect executed with dependency []", token);
}

run();
