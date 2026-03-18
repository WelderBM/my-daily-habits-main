import { useState } from "react";

function ContadorTeste() {
  const [contagem, setConatgem] = useState(0);

  const aumentar = () => setConatgem(contagem + 1);
  const diminuir = () => setConatgem(contagem > 0 ? contagem - 1 : 0);
  const zerar = () => setConatgem(0);

  return (
    <div>
      <p>Cliques: {contagem}</p>
      <button onClick={aumentar}>+1</button>
      <button onClick={diminuir}>-1</button>
      <button onClick={zerar}>zerar</button>
    </div>
  );
}

export default ContadorTeste;
