import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'LuisMOF1',
        name: 'LuisMOF1',
        isFollowing: true
    },
    {
        userName: 'Twiter',
        name: 'Twiter',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel',
        isFollowing: false
    },

]



export function App(){

    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing}) => (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
            
        </section>
    )
}