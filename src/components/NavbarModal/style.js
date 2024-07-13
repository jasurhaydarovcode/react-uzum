import styled from "styled-components"

export const NavbarMenu = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    background-color: white;
    color: black;
    width: 100%;
    height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    .navbar__modal--left {
        width:260px;
        position:relative;

        &::before {
            content: "";
            width:1px; 
            height:80vh; 
            position:absolute;
            top:0;
            right:0px;
            background:dimgray;
            opacity: 0.3;
        }

        &-link--inner {
            display:flex;
            align-items:center;
            gap:10px;
        }

        &-list {
            list-style:none;
    
            li {
                // margin: 0 0 15px 0; 
                padding: 10px 30px 10px 10px;
                transition: all .3s ease-in-out;
                padding: 6px 8px;  
                cursor: pointer;

                &:hover {
                    background: #f2f4f1;
                    transition: all .3s ease-in-out;
                }
            }
    
            li a{
                display:flex;
                align-items:center;

                &:hover {
                    h5 {
                        color:#7000ff;
                        transition: all .3s ease;
                    }
                }
    
    
                i {
                    margin-left:auto; 
                    opacity: 0.5;
                }
    
    
                
                h5 {
                    font-size: 16px;
                }
            }
    }
}
`