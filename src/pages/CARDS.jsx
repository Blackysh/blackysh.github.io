import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import backgrounde from "./images/bg.jpg"
import "./bg.css";
import { ButtonGroup } from "react-bootstrap";



const Cards = () => {
    return (
      <div class="text-white p-2" >
 <li>
 <div class="card bg-dark">
  <div class="card-body">
    <h5 class="card-title">CamControl</h5>
    <p class="card-text">Control your Computer using your hands with a camera.</p>
    <li class="btn-group">
    <a href="https://codeload.github.com/Blackysh/CamControl/zip/refs/heads/main" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/CamControl" target="_blank" class="btn btn-primary">Github</a>
    </li>
  </div>
</div>
        
<div class="card bg-dark">
  <div class="card-body">
    <h5 class="card-title">Remote Control Via Discord</h5>
    <p class="card-text">Remotely Control your computer by running this discord bot on it.</p>
    <li class="btn-group">
    <a href="https://codeload.github.com/Blackysh/Remote-Control-Via-Discord/zip/refs/heads/main" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/Remote-Control-Via-Discord" target="_blank" class="btn btn-primary">Github</a>
    </li>
  </div>
</div>
<div class="card bg-dark">
  <div class="card-body">
    <h5 class="card-title">AFS</h5>
    <p class="card-text">Command line tool to install and remove apt/flatpak/snap packages from one place.</p>
    <li class="btn-group">
    <a href="https://objects.githubusercontent.com/github-production-release-asset-2e65be/585413689/16fe061e-967b-4715-8ff4-f578bebd5092?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230107T071537Z&X-Amz-Expires=300&X-Amz-Signature=3b7a26a53422528bcb21d2f318990d6dd7bfbb28cdf209d7afbe6d931180f20b&X-Amz-SignedHeaders=host&actor_id=100060676&key_id=0&repo_id=585413689&response-content-disposition=attachment%3B%20filename%3Dafs&response-content-type=application%2Foctet-stream" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/afs-apt-flatpak-snap" target="_blank" class="btn btn-primary">Github</a>
    </li>
  </div>
</div>

<div class="card bg-dark">
  <div class="card-body">
    <h5 class="card-title">WEBSITE: Sahib's Applications</h5>
    <p class="card-text">THIS WEBSITE :/</p>
    <li class="btn-group">
    <a href="https://codeload.github.com/Blackysh/applications-list-website/zip/refs/heads/master" class="btn btn-primary">Download</a>
    <a href="https://github.com/Blackysh/applications-list-website" target="_blank" class="btn btn-primary">Github</a>
    </li>
  </div>
</div>
</li>
      </div>
    );}

export default Cards