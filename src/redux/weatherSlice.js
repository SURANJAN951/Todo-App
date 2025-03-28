import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Redux Thunk for fetching weather
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://weather-api167.p.rapidapi.com/api/weather/forecast", {
        params: {
          place: location,
          cnt: "1",
          units: "metric",
          type: "three_hour",
          mode: "json",
          lang: "en",
        },
        headers: {
          "x-rapidapi-key": "VITE_RAPIDAPI_KEY",
          "x-rapidapi-host": "weather-api167.p.rapidapi.com",
          Accept: "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch weather");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
