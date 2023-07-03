import "./KalenderKarte.css";

const KalenderKarte = () => {
  const today = new Date();
  today.setDate(today.getDate());
  const offset = today.getDay() - 1;

  const week = [
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date()
  ];

  week[0].setDate(today.getDate() + (0 - offset));
  week[1].setDate(today.getDate() + (1 - offset));
  week[2].setDate(today.getDate() + (2 - offset));
  week[3].setDate(today.getDate() + (3 - offset));
  week[4].setDate(today.getDate() + (4 - offset));
  week[5].setDate(today.getDate() + (5 - offset));
  week[6].setDate(today.getDate() + (6 - offset));

  const dayToString = (day) => {
    switch(day)
    {
      case 0: return "Mo";
      case 1: return "Di";
      case 2: return "Mi";
      case 3: return "Do";
      case 4: return "Fr";
      case 5: return "Sa";
      case 6: return "So";
      default:
        return "Invalid";
    }
  };
  
    return(
        <div className="kalenderKarte">
          <div className="tagContainer">
            {week.map((date, index) => (
              <div key={date.getDate()}>
                <div>{dayToString(index)}</div>
                <div style={{color: (index === offset ? "#503291" : "black")}}>{date.getDate()}</div>
              </div>
            ))}
            </div>
        </div>
    );
};

export default KalenderKarte;