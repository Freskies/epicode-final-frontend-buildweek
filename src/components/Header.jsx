import React from 'react'
import '../assets/style/Navbar.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">

			<Link to="/home">
            	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAclBMVEX///8KZsIAWr4AXL+/0Ou7z+rP3vEAYsEAX8COrtysweTf6PUAZMFhktIAWL55oNfo7/gkbsXv9PrW4vKjveP1+fxXi88qc8fF1u1rmNSDp9qZtuBNhc22yefg6fUAVb2GqdpAfcpJgcs4ecl5odeeuOATlVMKAAAFEElEQVR4nO2daXfbKhRFMUoMbhAeZMfyPP//v1g5w6sri4Ps1wUo6+zPUr1LrhDcC0gIQgghhBBCCCGEEEIIIYQQQgghhJAfy2xUvqTM26TJusy1lVnKWDu+zGrWxcEq00sdk+nVX9oXm770B0YebqJlaWP7tEeZ0bf2qkPaVZP3voK82MVWeQz9/uk970hs/4ctr9ovMrbHo5jT1XutYns8jC2qt2THovuKHgjx1qnO5BNVPZn9zoV3FeCqGpdksS2ewArx2kVvSe+g0Dss9A4LvcPy072NUVork8wEo5W30bZ3XCyX+UHLRMbqLbxNppb97xl0fyF1Co3u99Zm+lemZTLIEhD3esu8ntkSo5MOpefW8njbQVMqMY/eBXm85apJW4hF7BbH3nrRrC3EIXK/Ar3N2KUtJpEfTugtX53eYhU3UpC3mbu1xSxuN468s1/AWwyjNjjylo3llG+KqOki4G3WSFuIqIMs4K2X2Ps9ZlcIvLMN9t7HDHDk/YK9B/R+nP/hnWqcaMeY6ptFos+lyrF31GoW6r97UHsStbwC35d95D1N9j2PAyVu0ROOY+3WrV3GrWZBb9Tgp4TnDT3rnDjsI8+Msbexb83ar7Frnp75vFGN4i/RV9n48idGNrztp9G1/fkqY4e1hNVonUCBuUVeU8vzTbD0c5tCSrZVHlnL+WBTFkW5WY4TSSS3zNsbncmKLIkc8pWfXidJDXqHhd5hofdjfNRxP3iumBvD22hp58fh6jKdXi77/DiX9uEXmmf8rZ3c/Y5yXalq/6Q9rcraUK3YnMf2IXVc31mfhw7Oh9qvqIXz0psrjRxfRqKR7Wr8wIgNeqOCQz07aB06Fb1vcZPNYe6uXLce2P87b8eM7sZbK09muholn1o+bOG8jV3cVcwbWLVr8mDeRnob+5Oi1ybKQ3mrsTv+6xxbZPACeatTa+uKk7/Fw3jDCu49s7E3xsN4Z7ASes/Wm1YK4r3zVFzumfpSHSG81fBRbSHqr+MY3uZxbbH1VDNCeMOyhQtP1SuE91OMcIMn6+1p8HS9+7AvTNf7z/C3Y96w/p+wN9zHlbC3QAGesncOepSUvdESxdDe/cs+f8/z86pocS1auBvSuzxbqbWq0NrqvW9wOwMPZkDvydHe3mP0buq5A2SCwnmX9xUt+/xKv2DeZVN+weKlUEv3gxnKe9L8N9/Bu8DSnFDejr3u6ohu+uXuUAJ5O1fZ7FB/CDLFgbzXrp5Bo7ln4e4Iw3hPnAIGTT7Bzv4w3lOwpAgECkijhPF2hkn1G2APxSh2nIDSk27c2PTJLPJziU6gUO/g/xu5/96gFVwoU+seoATxRktSwd6m6N5opbjRwNt9olYQb5jCyUDVx52KCOINk6s2XW+4dNmCaU9kb1j2AAVbetOb3vSmN73pTW9605ve9KY3velNb3rTm970pje96U1vetOb3vSmN73p3f7nsfe/X1dgDrmT+nlh5t19LbC+LrB65kbPvn/l5K4lwLXQu+e+79n9DQlD77DQOyz0Dgu9w0LvsHTYu6vfBwS7ZBKmzaEd6aGuH07p4vdGLyLywenP8TErjPvli2f42jwT9QsSz/C1bXMiUzletR3Z/mu+X+66JK7/fDjlNf5Jza3Jbr/30u8lcxQvxtQ3ge9lls7n/xwYbQ93pwVNpidlZcJY2Rs6zjgaFf102bY5B5AQQgghhBBCCCGEEEIIIYQQQgghpLP8BsVAtU9ZfY7/AAAAAElFTkSuQmCC" alt="" id='logoWeb'/>
			</Link>
            
			<div>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Cerca compagni" id='search' />
            </div>

            <div className='gruppoNav'>

				<Link to="/home">
					<article className='icone'>
						<i className="fas fa-home"></i>
						<p>Home</p>
					</article>
				</Link>

                <article className='icone'>

                    <Link to="/Settings">

                    	<img src="https://placedog.net/25" alt="foto profilo" id='fotoProfilo'/>
					
                        <div className='profilo'>
                            <p>Tu</p>
                            <i className="fas fa-sort-down"></i>
                        </div>
                    </Link>

                </article>

            </div>
        </header>
    );
}

const apiUrl = 'https://striveschool-api.herokuapp.com/api/profile/'

const token = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZTUzYTBlYTI4NjAwMTUyOGI5MmEiLCJpYXQiOjE3MzQzMzc4NTAsImV4cCI6MTczNTU0NzQ1MH0.x3vaXhooIo6tPoIzPjx8W6POGfVGwhIdlO6WROYO46w'

const putProfiles = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Si è verificato un errore:', error);
    }
};

export default Header;