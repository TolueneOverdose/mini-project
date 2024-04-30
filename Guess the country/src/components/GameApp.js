import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { GameContext } from "../context/GameContext";
import DraggableFlagsContainer from "./DraggableFlagsContainer";
import EndMatchStats from "./EndMatchStats";
import SilhouettesGridContainer from "./SilhouettesGridContainer";
import Timer from "./Timer";

export default function GameApp() {
  const {
    startMatch,
    setStartMatch,
    matchEnded,
    setMatch,
    handleOnDragEnd,
    matchLocation,
  } = useContext(GameContext);
  const sst={
    border:"solid 2px white",
    display:'flex',
    borderRadius:'10px',
    flexDirection:'column',
    alignItems:'center',
    width:'30%',
    marginTop:'10%',
    padding:'2%',
    backgroundColor:'rgb(10,15,10)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',

    WebkitBackdropFilter: 'blur(5px)',
  
    backdropFilter: 'blur(5px)',

  }
  const ssp={
    border:"solid 2px white",
    display:'flex',
    borderRadius:'10px',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'1%',
    width:'60%',
    padding:'2%',
    backgroundColor:'rgb(10,15,10)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',

    // WebkitBackdropFilter: 'blur(5px)',
  
    // backdropFilter: 'blur(1px)',


  }
  const std={
    textAlign:'center',
    color:'white',
  }
  return (
    <>
      <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
        <main>
          {!startMatch ? (
            <div 
            style={sst}>
              <h1 style={std}>
                Welcome to the Country Guesser</h1>
              <img
                src={"assets/misc/globe.svg"}
                height={180}
                alt="Game Preview"
                style={{ margin: "15px 0px"}}
              />
              <button
                className="playAgainBtn"
                onClick={() => setStartMatch(true)}
              >
                Play
              </button>
              
            </div>
          ) : matchEnded ? (
            <>
              <EndMatchStats />
              <button onClick={setMatch} className="playAgainBtn">
                Play again
              </button>
            </>
          ) : (
            // <div style={{}}>
            <div style={ssp}>
              <figure className="locationBox">
                <h1>Location:</h1>
                <p>{matchLocation}</p>
              </figure>

              <section className="gameplaySection">
                <SilhouettesGridContainer />
                <aside>
                  <Timer />
                  <DraggableFlagsContainer />
                </aside>
              </section>
            </div>
          )}
        </main>
      </DragDropContext>
    </>
  );
}
