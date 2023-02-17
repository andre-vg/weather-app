import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Info from "./components/Info";
import { CircularProgress, IconButton, styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { DateTime } from "luxon";

function App() {
  const API_key = "f93aacfc4f417b961ee630e9fea7b9ca";
  const [city, setCity] = useState("");
  const [resposta, setResposta] = useState();
  const [loading, setLoading] = useState(false);
  const [hora, setHora] = useState();
  const [cor, setCor] = useState("rgba(0, 0, 0, 0.45)");

  const send = (event) => {
    event.preventDefault();

    if (city === "") {
      alert("Digite uma cidade");
    } else {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`
        )
        .then((res) => res.data)
        .then(async (data) => {
          setLoading(true);
          await getWeather(data[0].lat, data[0].lon);
        });
    }
  };

  const getWeather = async (lat, lon) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setLoading(false);
          setResposta(data);
          pegaHora(data.timezone);
        }, 1000);
      });
  };

  const pegaHora = (offset) => {
    let hora;
    if (offset < 0) {
      offset = offset * -1;
      hora = DateTime.utc().minus({ seconds: offset });
    } else {
      hora = DateTime.utc().plus({ seconds: offset });
    }

    setHora(hora);

    mudaCor(hora.hour);
  };

  const mudaCor = (hora) => {
    if (hora >= 6 && hora < 12) {
      setCor("#D0863866");
    } else if (hora >= 12 && hora < 18) {
      setCor("#308CB666");
    } else if (hora >= 18 && hora < 24) {
      setCor("#0A246366");
    } else if (hora >= 0 && hora < 6) {
      setCor("rgba(38, 38, 38, 0.45)");
    }
  };

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  });

  // useEffect(() => {
  //   axios.get(
  //     `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_key}`
  //   );
  // }, []);

  return (
    <div className="Poppins text-white bg-[url(https://img.freepik.com/premium-photo/minimalist-black-background-with-square-geometric-shapes_103577-5240.jpg?w=2000)] bg-cover absolute flex justify-center items-center w-full h-full">
      <div
        className={`h-[60%] w-[30%] rounded-3xl shadow-lg transition-colors duration-500 backdrop-blur-sm z-10`}
        style={{
          background: cor,
        }}
      >
        <form onSubmit={send} className="flex px-6 py-4 h-[15%]">
          <TextField
            className="border-b-2 border-slate-900 focus:outline-none w-[90%]"
            label="Digite uma cidade"
            variant="standard"
            color="error"
            sx={{
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "transparent",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              //hover
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "black",
              },
              "& .MuiFormLabel-root": {
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.25rem",
              },
            }}
            autoComplete="off"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            InputProps={{
              endAdornment: city != "" && (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setCity("")}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  <ClearIcon color="white" />
                </IconButton>
              ),
            }}
          />
          {/* <FaSearchLocation size={30} className="cursor-pointer"> */}
          <div className="w-[10%] flex justify-center">
            <div className="mt-3">
              <IconButton
                type="submit"
                className="cursor-pointer mt-6"
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          {/* </FaSearchLocation> */}
        </form>
        {resposta && !loading ? (
          <Info info={resposta} hora={hora.toFormat("HH:mm")} />
        ) : null}
        {loading && (
          <div className="flex justify-center items-center h-full">
            <CircularProgress
              className="mt-10"
              sx={{
                color: "white",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
