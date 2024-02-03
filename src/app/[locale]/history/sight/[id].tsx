import { HistoryPageContent } from "../../../../../components/HistoryPageComponents/HistoryHelpButtons/HistoryPageContent";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter()
  const {sight} = router.query
 
  return (
    <main style={{ padding: "60px 0px" }}>
      
    </main>
  );
}
