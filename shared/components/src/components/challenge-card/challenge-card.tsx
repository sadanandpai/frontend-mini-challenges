import { Component, Prop, h } from '@stencil/core';
import type { IChallenge, IContributor } from '@fmc/data/types';

export interface ChallengeCardProps extends Omit<IChallenge, 'developer' | 'contributors'> {
  developer?: IContributor;
  contributors?: IContributor[];
}

@Component({
  tag: 'challenge-card',
  styleUrl: 'challenge-card.css',
  shadow: true,
})
export class ChallengeCard {
  @Prop() challenge!: ChallengeCardProps;

  render() {
    return (
      <a class={`challenge-card ${!this.challenge.link ? 'disabled' : ''} ${this.challenge.difficulty}`} href={this.challenge.link}>
        {this.challenge.isNew && <span class="new">New</span>}
        <div>
          <h3>{this.challenge.title}</h3>

          <div class="avatar-container">
            {this.challenge.developer && (
              <div class="developer">
                <img src={this.challenge.developer.pic} alt="" />
                <span class="name">{this.challenge.developer.name}</span>
              </div>
            )}
            {/* TODO: create avatar group ce */}
            {/* {this.challenge.contributors && <AvatarGroup contributorNames={challenge.contributors} />} */}
          </div>
        </div>
      </a>
    );
  }
}
