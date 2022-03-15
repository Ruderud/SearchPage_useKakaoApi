import SearchInput from "./component/SearchInput.js";
import SearchBtn from "./component/SearchBtn.js";
import SearchLog from "./component/SearchLog.js";
import { setGlobalSearchResultArrayValue } from "./utils/globalValue.js";

setGlobalSearchResultArrayValue();
SearchInput();
SearchBtn();
SearchLog();
