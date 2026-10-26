import { useNames } from './ContextMain';


export default function Level1Child() {
const names = useNames();
return (<>
from Level1Child: { names.join(', ') }<br/>
</>
)}
