import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest'
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: []
  }

  componentDidMount() {
    octokit.repos.listForUser({
  		username: 'Ananastya77'
		}).then(({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false,
				avatarUrl: data[0].owner.avatar_url,
				login: data[0].owner.login
			});
		})
		.catch(err =>
			this.setState({
				hasError: true,
				error:  err,
				isLoading: false
			})
		);
	};

  render() {
    const { isLoading, repoList, hasError, error } = this.state;

    if (this.state.hasError) {
      return (
        <div className={styles.wrap}>
          <h1 className={styles.title}>
            { this.state.error.name }
          </h1>
          <p className={styles.error__text}>
            { this.state.error.message }
          </p>
        </div>
      );
    };

    return (
      <div className={styles.wrap}>
        { isLoading ?
          <h1 className={styles.loading}>
            l
            <span className={styles.letter}>o</span>
            ading
          </h1> : (
            <h1 className={styles.title}>
              ab
              <span className={styles.letter}>o</span>
              ut
            </h1>
              <div></div>
              <div>
                <ol className={styles.list}>
                  {repoList.map(repo => (
                    <li key={repo.id} className={styles.repo__item}>
                      <a href={repo.html_url} className={styles.repo__link}>{repo.name}</a>
                    </li>
                  ))}
                </ol>
              </div>
          )
        }
      </div>
    )
  }
};

export default About;
