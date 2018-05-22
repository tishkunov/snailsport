const initialState = {
  players:[],
  playersStore:[],
  chosedPlayer:''
}

export default function data(state = initialState, action) {
  const compareNumeric = (a, b) => {
    if (action.payload === "younger") {
      if (a.age > b.age) {return 1;}
      if (a.age < b.age) {return -1;}
    }
    else {
      if (a.age < b.age) {return 1;}
      if (a.age > b.age) {return -1;}
    }
	}

  const compareAlpha = (a, b) => {
    if (action.payload === "A") {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
    }
    else {
      if(a.name > b.name) return -1;
      if(a.name < b.name) return 1;
    }
  }

	switch (action.type) {
		case "FETCH_DATA":
		return {...state, players: action.payload, playersStore: action.payload}
    case "SEARCH_QUERY":
    return {...state, players: state.playersStore.filter((item, index) => {
        if (item.name.toLowerCase().indexOf(action.payload.toLowerCase(), 0) === 0) {
          return item;
        }
      }),
      chosedPlayer:null
    }
    case "SORT_AGE":
    return {...state, players:state.players.sort(compareNumeric).slice(), chosedPlayer:null}
    case "SORT_NAME":
    return {...state, players:state.players.sort(compareAlpha).slice(), chosedPlayer:null}
    case "CHOOSE_PLAYER":
    return {...state, chosedPlayer:state.players[action.payload]}
		default:
    return state;
  }
}
