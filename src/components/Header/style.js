import styled from "styled-components";

export const HeaderTop = styled.div`
    padding: 5px 0;
    background-color: #f0f2f5;

    .header__top--inner {
        display:flex;
        align-items:center;
    }

    // Header Top left
    .header__top--left {
        display:flex;
        align-items:center;
        gap:30px;

        &-btn {
            border:none;
            background: transparent;
            display:flex;
            align-items:center;
            gap:5px;
        }
    
        &-desc b{
            border-bottom: 1.7px solid black;
        }

    }   

    // Header Top left End

    //
    
    // Header Top right Start
    .header__top--right {
        display:flex;
        align-items:center;
        gap:20px;
        margin-left:auto;

        a {
            transition: color .3s ease;

            &:hover {
                color: dimgray;
                transition: color .3s ease;
            }
        }

        &-link {
            color: #7000ff;
        }

        form select {
            outline:none;
            background:transparent;
            border: none;
            transition: border .3s ease; 
            
            &:hover {
                cursor:pointer;
                border: 1px solid #222;
                transition: border .3s ease; 
            }
        }
    }
    // Header Top right End

`


export const HeaderMid = styled.div`
    padding:17px 0;
`
export const Navbar = styled.nav``