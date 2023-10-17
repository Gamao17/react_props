import Player from './Player.js'
import PlayersTab from './Players.js'
import 'bootstrap'

 const List = () => 
    (<div className='listCard' style={{ display :'grid', gridTemplateColumns :'repeat(3, 1fr)', gridGap: '10px', alignItems:'center',paddingLeft:'80px',paddingTop : '30px'}}>
        {PlayersTab.map((a) => (<Player {...a} />))}
    </div>)

 export default List