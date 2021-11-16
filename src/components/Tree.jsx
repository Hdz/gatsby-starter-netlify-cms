import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "@emotion/styled";
import "../components/tree.sass";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid black;
`;

const StyledTreeExample = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"green"}
    lineBorderRadius={"10px"}
    label={
      <StyledNode style={{}}>
        <a href="mailto:president@fcs.futebol">
          <div>
            <div class="center-top">Romain Marinier</div>
            <div class="center-top">Président</div>
            <div class="stats">
              <div>
                <div class="center-bottom">
                  <div>
                    Mail :
                    <div class="value">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    Téléphone :
                    <div class="value">
                      <a href="https://wa.me/336969696969">+33 6 69 69 69 69</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </StyledNode>
    }
  >
    <TreeNode
      label={
        <StyledNode>
          <a href="mailto:vice-president@fcs.futebol">
            <div>
              <div class="center-top">Stan Sauvaget</div>
              <div class="center-top">Vice-Président</div>
              <div class="stats">
                <div>
                  <div class="center-bottom">
                    <div>
                      Mail :
                      <div class="value">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      Téléphone :
                      <div class="value">
                        <a href="https://wa.me/336969696969">
                          +33 6 69 69 69 69
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <a href="mailto:vice-president@fcs.futebol">
              <div>
                <div class="center-top">Stan Sauvaget</div>
                <div class="center-top">Vice-Président</div>
                <div class="stats">
                  <div>
                    <div class="center-bottom">
                      <div>
                        Mail :
                        <div class="value">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        Téléphone :
                        <div class="value">
                          <a href="https://wa.me/336969696969">
                            +33 6 69 69 69 69
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </StyledNode>
        }
      />
    </TreeNode>
    <TreeNode
      label={
        <StyledNode>
          <a href="mailto:vice-president@fcs.futebol">
            <div>
              <div class="center-top">Stan Sauvaget</div>
              <div class="center-top">Vice-Président</div>
              <div class="stats">
                <div>
                  <div class="center-bottom">
                    <div>
                      Mail :
                      <div class="value">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      Téléphone :
                      <div class="value">
                        <a href="https://wa.me/336969696969">
                          +33 6 69 69 69 69
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <a href="mailto:vice-president@fcs.futebol">
              <div>
                <div class="center-top">Stan Sauvaget</div>
                <div class="center-top">Vice-Président</div>
                <div class="stats">
                  <div>
                    <div class="center-bottom">
                      <div>
                        Mail :
                        <div class="value">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        Téléphone :
                        <div class="value">
                          <a href="https://wa.me/336969696969">
                            +33 6 69 69 69 69
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <StyledNode>
              <a href="mailto:vice-president@fcs.futebol">
                <div>
                  <div class="center-top">Stan Sauvaget</div>
                  <div class="center-top">Vice-Président</div>
                  <div class="stats">
                    <div>
                      <div class="center-bottom">
                        <div>
                          Mail :
                          <div class="value">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          Téléphone :
                          <div class="value">
                            <a href="https://wa.me/336969696969">
                              +33 6 69 69 69 69
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </StyledNode>
          }
        />
        <TreeNode
          label={
            <StyledNode>
              <a href="mailto:vice-president@fcs.futebol">
                <div>
                  <div class="center-top">Stan Sauvaget</div>
                  <div class="center-top">Vice-Président</div>
                  <div class="stats">
                    <div>
                      <div class="center-bottom">
                        <div>
                          Mail :
                          <div class="value">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          Téléphone :
                          <div class="value">
                            <a href="https://wa.me/336969696969">
                              +33 6 69 69 69 69
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </StyledNode>
          }
        />
      </TreeNode>
    </TreeNode>
    <TreeNode
      label={
        <StyledNode>
          <a href="mailto:vice-president@fcs.futebol">
            <div>
              <div class="center-top">Stan Sauvaget</div>
              <div class="center-top">Vice-Président</div>
              <div class="stats">
                <div>
                  <div class="center-bottom">
                    <div>
                      Mail :
                      <div class="value">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      Téléphone :
                      <div class="value">
                        <a href="https://wa.me/336969696969">
                          +33 6 69 69 69 69
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </StyledNode>
      }
    >
      <TreeNode
        label={
          <StyledNode>
            <a href="mailto:vice-president@fcs.futebol">
              <div>
                <div class="center-top">Stan Sauvaget</div>
                <div class="center-top">Vice-Président</div>
                <div class="stats">
                  <div>
                    <div class="center-bottom">
                      <div>
                        Mail :
                        <div class="value">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        Téléphone :
                        <div class="value">
                          <a href="https://wa.me/336969696969">
                            +33 6 69 69 69 69
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </StyledNode>
        }
      />
      <TreeNode
        label={
          <StyledNode>
            <a href="mailto:vice-president@fcs.futebol">
              <div>
                <div class="center-top">Stan Sauvaget</div>
                <div class="center-top">Vice-Président</div>
                <div class="stats">
                  <div>
                    <div class="center-bottom">
                      <div>
                        Mail :
                        <div class="value">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        Téléphone :
                        <div class="value">
                          <a href="https://wa.me/336969696969">
                            +33 6 69 69 69 69
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </StyledNode>
        }
      />
    </TreeNode>
  </Tree>
);

export default StyledTreeExample;
