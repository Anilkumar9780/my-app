import React from "react";
import { useEffect, useState } from "react";
export default function Searchweather() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("Ludhiana");
  const [input, setInput] = useState("");
  let componentMounted = true;
  // key=32e7a9d44328b80875530d35b7c40b6f
  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=32e7a9d44328b80875530d35b7c40b6f`
      );
      if (componentMounted) {
        setData(await res.json());
        console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchWeather();
  }, [search]);

  let emoji = null;
  if (typeof data.main != "undefined") {
    if (data.weather[0].min == "Clouds") {
      emoji = "fa-cloud";
      console.log(emoji);
    } else if (data.weather[0].min == "Thunderstorm") {
      emoji = "fa-bolt";
    } else if (data.weather[0].min == "Drizzle") {
      emoji = "fa-cloud-rain";
    } else if (data.weather[0].min == "Rain") {
      emoji = "fa-cloud-shower-heavy";
    } else if (data.weather[0].min == "Snow") {
      emoji = "fa-snow-flake";
    } else {
      emoji = "fa-cloud";
    }
  } else {
    return <>
    <div class=" align-items text-center" style={{marginTop:"250px"}}>
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
    </>;
  }

  let temp = (data.main.temp - 291.92).toFixed(2);
  let temp_min = (data.main.temp_min - 288.87).toFixed(2);
  let temp_max = (data.main.temp_max - 293.62).toFixed(2);
  let feels_like =(data.main.feels_like - 309.01).toFixed(2)

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  let time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(input);
  };

  return (
    <div>
      <div className="contniner mt-5">
        <div className="row justify-content-center">
          <div className="col-md-3 ">
            <div className="card text-white text-center border-8">
              <img
                src={`https://source.unsplash.com/600x900/?${data.weather[0].main}`}
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay ">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search city"
                      aria-label="Search city"
                      aria-describedby="basic-addon2"
                      name="search"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="input-group-text"
                      id="basic-addon2"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-darklight bg-opacity-50  ">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text lead">
                    {day}, {month} {date},{year}
                    <br />
                    {time}
                  </p>

                  <hr />
                  <i className={`fa ${emoji} fa-3x`}></i>
                  <h1 className="fw-bolder mb-3">{temp} &deg;C</h1>
                  <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
                  <p className="lead">
                    {temp_min}&deg;C | {temp_max}&deg;C
                    <br/>
                     feels_like {feels_like}&deg;C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
