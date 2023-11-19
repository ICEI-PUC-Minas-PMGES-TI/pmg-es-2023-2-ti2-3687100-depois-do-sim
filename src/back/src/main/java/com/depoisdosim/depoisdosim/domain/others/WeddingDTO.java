package com.depoisdosim.depoisdosim.domain.others;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class WeddingDTO {
    private Long id;
    private String name;
    private String date;
    private String time;
    private String location;
}
