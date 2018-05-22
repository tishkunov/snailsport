export const fetchData = () => dispatch => {
	fetch("/data.json", {
	 	headers : {
			 	'Content-Type': 'application/json',
			 	'Accept': 'application/json'
		 	}
		})
    .then(res => res.json())
    .then(json =>
      dispatch({
        type: "FETCH_DATA",
        payload: json
      })
    );
};

export const searchQuery = (event) => dispatch => {
	return dispatch({
		type: "SEARCH_QUERY",
		payload:event.target.value
	})
};

export const sortByAge = (event) => dispatch => {
	return dispatch({
		type: "SORT_AGE",
		payload:event.target.getAttribute('filter')
	})
};

export const sortByName = (event) => dispatch => {
	return dispatch({
		type: "SORT_NAME",
		payload:event.target.getAttribute('filter')
	})
};

export const choosePlayer = (event) => dispatch => {
	return dispatch({
		type:"CHOOSE_PLAYER",
		payload:event.currentTarget.getAttribute('datakey')
	})
}

export default  fetchData;
