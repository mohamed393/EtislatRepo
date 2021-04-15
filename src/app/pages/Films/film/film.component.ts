import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../../core/services/film.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {filmInterface} from './film.interface';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
    films:filmInterface[];
    filmTypes = ['now_playing', 'top_rated', 'upcoming'];
    endPoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d5a171e2f1660a0575f38d94a90a1bec&language=en-US';


    constructor(private filmService: FilmService, private route: ActivatedRoute, private httpClient: HttpClient) {
        this.films = this.route.snapshot.data.data1[0].results;
        console.log('films', this.films);
    }

    ngOnInit(): void {
    }

    onChangeMethod(data) {
        this.httpClient.get<{results:any[]}>(this.getEndPoint(data)).subscribe(response=>{
            this.films = response.results
            console.log('response.results',response.results)
        })

    }

    getEndPoint(type) {
        return `https://api.themoviedb.org/3/movie/${type}?api_key=d5a171e2f1660a0575f38d94a90a1bec&language=en-US`
    }

}
