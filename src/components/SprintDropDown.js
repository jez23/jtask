import React, { useEffect }  from 'react';

function SprintDropDown(){
    useEffect(() => {
        const sprintDropdownBtn = document.querySelector(".sprintDropdownBtn");
        const sprintDropdownContent = document.querySelector(".sprintDropdownContent");
        sprintDropdownBtn.addEventListener('mouseover', (e) => {
            sprintDropdownContent.classList.remove('display');
        })
        sprintDropdownBtn.addEventListener('mouseout', (e) => {
            sprintDropdownContent.classList.add('display');
        })
    })
    return (
        <div className="sprintDropdown">
            <div className="sprintDropdownContainer">
                <button className="sprintDropdownBtn">Sprints</button>
                <div className="sprintDropdownContent display">
                    <a href="https://jezblackmore.com/">Sprint 1</a>
                    <a href="https://jezblackmore.com/">Sprint 2</a>
                    <a href="https://jezblackmore.com/">Sprint 3</a>
                </div>
            </div>
        </div>
    )
}

export default SprintDropDown;