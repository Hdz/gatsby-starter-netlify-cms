import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from "@emotion/styled";
import '../components/tree.sass';


const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid black;
`;
 
const StyledTreeExample = () => (
  <Tree
    lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<StyledNode style={{
      width: '140px',
      display: 'inline-block',
    }}
    className="card"
  >
                    <div>

        <div class="center top">
          Romain Marinier
        </div>
        <div class="center top">
          Président
        </div>
        <div class="stats">
          <div>
            <div class="bottom">
          <div>
            Mail
            <div class="value"><a href="mailto:president@fcs.futebol"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg></a></div>
          </div>
          <div>
            Téléphone
            <div class="value"><a href="tel:+33669696969">+33 6 69 69 69 69</a></div>
          </div>
          </div>

      </div>
      </div>          
        </div>
      </StyledNode>}
  >
    <TreeNode label={<StyledNode>Stan le ministre du bar</StyledNode>}>
      <TreeNode label={<StyledNode>Antoine le futur daddy</StyledNode>} />
    </TreeNode>
    <TreeNode label={<StyledNode>Mig le grand</StyledNode>}>
      <TreeNode label={<StyledNode>Dom le magnifique</StyledNode>}>
        <TreeNode label={<StyledNode>Giroud</StyledNode>} />
        <TreeNode label={<StyledNode>Waldemar</StyledNode>} />
      </TreeNode>
    </TreeNode>
    <TreeNode label={<StyledNode>Quentin la frappe</StyledNode>}>
      <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
      <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
    </TreeNode>
  </Tree>
)

export default StyledTreeExample