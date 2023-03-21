import { useReducer } from "react";

const initialState = {
  loading: false,
  error: null,
  status: "idle",
};

const SET_LOADING = "setLoading";
const SET_ERROR = "setError";
const SET_STATUS = "setStatus";

const asyncReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING: {
      return { ...state, loading: payload };
    }
    case SET_ERROR: {
      return { ...state, error: payload };
    }
    case SET_STATUS: {
      return { ...state, status: payload };
    }

    default:
      throw new Error("error with api");
  }
};

const useAsync = (promise) => {
  const [{ loading, error, status }, dispatch] = useReducer(
    asyncReducer,
    initialState
  );

  const execute = async (...data) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      dispatch({ type: SET_STATUS, payload: "pending" });
      const res = await promise(...data);

      dispatch({ type: SET_STATUS, payload: "success" });
      return res;
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
      dispatch({ type: SET_STATUS, payload: "error" });
      throw error;
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  return {
    execute,
    loading,
    error,
    status,
  };
};
export default useAsync;
