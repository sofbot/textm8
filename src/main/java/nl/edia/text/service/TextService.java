package nl.edia.text.service;

import nl.edia.text.Text;

import java.util.List;

public interface TextService {

    List<Text> findAll();
    List<Text> findBySearchQuery(String searchQuery);

    Text findOne(String id);

    Text createText(Text text);
    Text updateText(Text text);
    void removeText(String id);
}
