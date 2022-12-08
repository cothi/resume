import Gauge from "./Gauge"

export default function TechRank({ git }) {


  if (git.pros.length === 0) {
    return (
      <>
        Loading
      </>
    )
  }
  const test = git.pros[0].text;
  var rate = {}
  var calcu = {}

  test.map((v) => {
    if (!rate[v.language]) {
      rate[v.language] = 0;
    }
    rate[v.language] = rate[v.language] + 1
    calcu[v.language] = rate[v.language] / 26 * 100
  })


  const sortable = Object.entries(calcu)
  const sorted = sortable.sort((a, b) => {
    // console.log(a, b)
    const aVal = Object.values(a)[1];
    const bVal = Object.values(b)[1];
    return bVal - aVal;
  });
  // console.log(b, "h"); // {Zoe: 60, Ahri: 200, Aatrox: 300, Garen: 400, Asche: 1000}


  return (
    <>

      {
        sorted.map((item, i) => (
          <div key={i}>
            <Gauge title={item[0]} percentage={item[1]} />
          </div>
        ))
      }
    </>
  )
}
